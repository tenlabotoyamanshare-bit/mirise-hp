import { NextResponse } from "next/server";

/**
 * お問い合わせフォームの送信先。
 * 環境変数 CONTACT_TO_EMAIL（なければ RECRUIT_TO_EMAIL）宛に送信します。
 * 実際の送信には RESEND_API_KEY が必要です（未設定時はログ出力のみ）。
 */
export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      type,
      name,
      phone,
      email,
      address,
      message,
      userName,
      userAge,
      userGender,
      userCondition,
      desiredStart,
      agree,
    } = data ?? {};

    // 必須チェック
    if (!type || !name || !phone || !email || !message || !agree) {
      return NextResponse.json(
        { ok: false, error: "必須項目が入力されていません。" },
        { status: 400 }
      );
    }

    const to =
      process.env.CONTACT_TO_EMAIL ||
      process.env.RECRUIT_TO_EMAIL ||
      "contact@example.com";
    const subject = `【お問い合わせ】${type}（${name} 様）`;
    const body = [
      "訪問看護ステーション ミライズ お問い合わせフォームより送信がありました。",
      "",
      `お問い合わせの種類：${type}`,
      `お名前：${name}`,
      `電話番号：${phone}`,
      `メールアドレス：${email}`,
      `ご住所：${address || "（未入力）"}`,
      "",
      "【お問い合わせ内容】",
      message,
      "",
      "【利用者の情報】",
      `利用者のお名前：${userName || "（未入力）"}`,
      `利用者の年齢：${userAge || "（未入力）"}`,
      `利用者の性別：${userGender || "（未入力）"}`,
      `診断名または状況：${userCondition || "（未入力）"}`,
      `希望するサービス開始時期：${desiredStart || "（未入力）"}`,
      "",
      "─────────────────────",
      "このメールはお問い合わせフォームから自動送信されています。",
    ].join("\n");

    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RECRUIT_FROM_EMAIL || "onboarding@resend.dev",
          to: [to],
          reply_to: email,
          subject,
          text: body,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("[contact] メール送信失敗:", errText);
        return NextResponse.json(
          { ok: false, error: "送信に失敗しました。時間をおいて再度お試しください。" },
          { status: 502 }
        );
      }
    } else {
      console.log("[contact] 送信先:", to);
      console.log(body);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] エラー:", err);
    return NextResponse.json(
      { ok: false, error: "サーバーエラーが発生しました。" },
      { status: 500 }
    );
  }
}

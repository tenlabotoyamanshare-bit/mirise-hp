"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/site";

const MAIN = "#3d9e8c";
const TYPES = ["訪問看護のご利用について", "採用について", "その他"];

type Status = "idle" | "submitting" | "success" | "error";

const initial = {
  name: "",
  phone: "",
  email: "",
  address: "",
  message: "",
  userName: "",
  userAge: "",
  userCondition: "",
  desiredStart: "",
};

export function ContactForm() {
  const [type, setType] = useState("");
  const [values, setValues] = useState(initial);
  const [gender, setGender] = useState("");
  const [agree, setAgree] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const showForm = type === "訪問看護のご利用について" || type === "その他";
  const isRecruit = type === "採用について";

  const update =
    (key: keyof typeof initial) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement
      >
    ) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  const isValid =
    showForm &&
    values.name &&
    values.phone &&
    values.email &&
    values.message &&
    values.userName &&
    values.userAge &&
    gender &&
    values.userCondition &&
    agree;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isValid || status === "submitting") return;
    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setErrorMsg("送信先が未設定です。管理者にお問い合わせください。");
      return;
    }
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `【お問い合わせ】${type}（${values.name} 様）`,
          from_name: "ミライズ お問い合わせフォーム",
          replyto: values.email,
          "お問い合わせの種類": type,
          "お名前": values.name,
          "電話番号": values.phone,
          "メールアドレス": values.email,
          "ご住所": values.address || "（未入力）",
          "お問い合わせ内容": values.message,
          "利用者のお名前": values.userName,
          "利用者の年齢": values.userAge,
          "利用者の性別": gender,
          "診断名または状況": values.userCondition,
          "希望開始時期": values.desiredStart || "（未入力）",
          "個人情報の同意": agree ? "同意する" : "未同意",
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message || "送信に失敗しました。");
      setStatus("success");
      setValues(initial);
      setGender("");
      setAgree(false);
      setType("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "送信に失敗しました。");
    }
  }

  const req = <span className="text-[#e0588e]"> *</span>;
  const inputCls = "h-12 text-base rounded-md bg-white border-[#8f8f8f] text-[#1f1f1f]";
  const labelCls = "text-[#2a2a2a] font-bold";
  const taCls =
    "w-full rounded-md bg-white border border-[#8f8f8f] text-[#1f1f1f] text-base px-3 py-2.5 leading-relaxed outline-none focus:border-[#3d9e8c]";

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white px-6 sm:px-10 py-14 text-center">
        <p
          className="text-2xl font-bold mb-4"
          style={{ color: MAIN, fontFamily: "var(--font-zen-maru-gothic)" }}
        >
          お問い合わせありがとうございます
        </p>
        <p className="text-base text-[#5a5a5a] leading-loose">
          内容を確認のうえ、担当者より折り返しご連絡いたします。
          <br />
          今しばらくお待ちください。
        </p>
      </div>
    );
  }

  return (
    <div
      className="rounded-3xl px-6 sm:px-10 py-8 sm:py-12"
      style={{ background: "rgba(220,240,233,0.55)" }}
    >
      <h2
        className="text-2xl sm:text-3xl font-bold text-center text-[#231F20] mb-8 sm:mb-10"
        style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
      >
        お問い合わせフォーム
      </h2>

      <form onSubmit={handleSubmit} className="space-y-7 max-w-[620px] mx-auto">
        {/* お問い合わせの種類 */}
        <div className="space-y-2">
          <Label htmlFor="type" className={labelCls}>
            お問い合わせの種類{req}
          </Label>
          <div className="relative">
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
              className="w-full h-12 appearance-none rounded-md bg-white border border-[#8f8f8f] text-[#1f1f1f] text-base px-3 pr-10 outline-none focus:border-[#3d9e8c]"
            >
              <option value="" disabled>
                選択してください
              </option>
              {TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8f8f8f]">
              ▼
            </span>
          </div>
        </div>

        {/* 採用について：採用ページへ誘導 */}
        {isRecruit && (
          <p className="text-base sm:text-lg font-bold text-[#231F20] leading-relaxed">
            採用については、
            <Link href="/recruit#apply-form" className="text-[#3b82c4] underline">
              採用情報ページ
            </Link>
            をご覧ください。
          </p>
        )}

        {/* 訪問看護・その他：フォーム本体 */}
        {showForm && (
          <>
            <div className="space-y-2">
              <Label htmlFor="name" className={labelCls}>
                お名前（例：山田 花子）{req}
              </Label>
              <Input id="name" value={values.name} onChange={update("name")} required className={inputCls} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className={labelCls}>
                電話番号{req}
              </Label>
              <Input id="phone" type="tel" inputMode="tel" value={values.phone} onChange={update("phone")} required className={inputCls} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className={labelCls}>
                メールアドレス{req}
              </Label>
              <Input id="email" type="email" value={values.email} onChange={update("email")} required className={inputCls} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className={labelCls}>
                ご住所（任意）
              </Label>
              <Input id="address" value={values.address} onChange={update("address")} className={inputCls} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className={labelCls}>
                お問い合わせ内容{req}
              </Label>
              <textarea
                id="message"
                rows={4}
                value={values.message}
                onChange={update("message")}
                required
                placeholder="訪問看護を希望する内容や理由、特に心配している症状やサポートが必要な項目など"
                className={`${taCls} placeholder:text-[#9a9a9a]`}
              />
            </div>

            {/* 利用者の情報 */}
            <div className="pt-2">
              <p
                className="text-lg font-bold text-[#231F20] mb-5 flex items-center gap-2"
                style={{ fontFamily: "var(--font-zen-maru-gothic)" }}
              >
                <span style={{ color: MAIN }}>■</span> 利用者の情報
              </p>

              <div className="space-y-7">
                <div className="space-y-2">
                  <Label htmlFor="userName" className={labelCls}>
                    利用者のお名前{req}
                  </Label>
                  <Input id="userName" value={values.userName} onChange={update("userName")} required className={inputCls} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="userAge" className={labelCls}>
                      利用者の年齢{req}
                    </Label>
                    <Input id="userAge" inputMode="numeric" value={values.userAge} onChange={update("userAge")} required className={inputCls} />
                  </div>
                  <div className="space-y-2">
                    <Label className={labelCls}>利用者の性別{req}</Label>
                    <RadioGroup
                      value={gender}
                      onValueChange={(v) => setGender(String(v))}
                      className="flex flex-row gap-8 pt-2"
                    >
                      {["男", "女"].map((g) => (
                        <label key={g} className="flex items-center gap-2 cursor-pointer text-base text-[#2a2a2a]">
                          <RadioGroupItem value={g} className="border-[#8f8f8f]" />
                          {g}
                        </label>
                      ))}
                    </RadioGroup>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="userCondition" className={labelCls}>
                    診断名または状況（例：自閉症など）{req}
                  </Label>
                  <textarea
                    id="userCondition"
                    rows={3}
                    value={values.userCondition}
                    onChange={update("userCondition")}
                    required
                    className={taCls}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="desiredStart" className={labelCls}>
                    希望するサービス開始時期
                  </Label>
                  <Input id="desiredStart" type="date" value={values.desiredStart} onChange={update("desiredStart")} className={inputCls} />
                </div>
              </div>
            </div>

            {/* 個人情報の同意 */}
            <div className="pt-2">
              <p className="text-base font-bold text-[#231F20] mb-3 flex flex-wrap items-center gap-x-2">
                <span>
                  <span style={{ color: MAIN }}>■</span> 個人情報の取扱いに関する同意
                </span>
                <Link href="/privacy" className="text-sm font-normal text-[#3b82c4] underline">
                  （※個人情報の取り扱いについて）
                </Link>
              </p>
              <label className="flex items-start gap-3 cursor-pointer text-base text-[#2a2a2a]">
                <span className="mt-1">
                  <Checkbox checked={agree} onCheckedChange={(c) => setAgree(c === true)} className="border-[#8f8f8f]" />
                </span>
                <span>個人情報の取扱いに同意しました。{req}</span>
              </label>
            </div>

            {status === "error" && <p className="text-sm text-[#d14343]">{errorMsg}</p>}

            <button
              type="submit"
              disabled={!isValid || status === "submitting"}
              className="w-full rounded-full py-4 text-white font-bold text-lg shadow-sm transition-opacity disabled:cursor-not-allowed disabled:opacity-100"
              style={{
                fontFamily: "var(--font-zen-maru-gothic)",
                background: isValid ? MAIN : "#9aa6a3",
              }}
            >
              {status === "submitting" ? "送信中..." : "上記の内容で送信する"}
            </button>
          </>
        )}
      </form>
    </div>
  );
}

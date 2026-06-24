/**
 * ヒーロー用 象徴モチーフ候補（いちごに代わるミライズのシンボル）
 *
 * 画像アセットは使わず、やわらかい色面（blob）＋SVG線画で表現。
 * すべて純粋な描画のみ（フック無し）なのでサーバーコンポーネントでも使える。
 *
 * /motif-preview で見比べて、採用するものを HomeHero に組み込む。
 */

const BLOBS = (
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute rounded-full blur-2xl" style={{ width: "60%", height: "60%", top: "6%", left: "10%", background: "rgba(236,153,208,0.42)" }} />
    <div className="absolute rounded-full blur-2xl" style={{ width: "56%", height: "56%", top: "20%", right: "6%", background: "rgba(132,211,244,0.38)" }} />
    <div className="absolute rounded-full blur-2xl" style={{ width: "52%", height: "52%", bottom: "4%", left: "26%", background: "rgba(158,222,208,0.42)" }} />
  </div>
);

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[min(70vw,360px)] aspect-square">
      {BLOBS}
      <svg viewBox="0 0 240 240" fill="none" className="relative w-full h-full drop-shadow-sm">
        {children}
      </svg>
    </div>
  );
}

/* ───────── 薄い虹（背景に溶け込む装飾用・大小いろいろ使う） ─────────
   width はクラス/styleで指定（例: className="w-[420px]"）。
   opacity を低めにして水彩背景に溶け込ませる。 */
/** やわらかいパステルの虹（7色の帯／端はフェード／半透明）。
 *  添付参考のような“本物の虹”を、水彩トーンに合わせた色味で。 */
const RAINBOW_BANDS = ["#F2A9B8", "#F6C29B", "#F3E0A0", "#A8E0C6", "#8FD0F0", "#B0AEDC", "#C7A6E0"];

export function RainbowArc({
  className,
  style,
  opacity = 0.8,
}: {
  className?: string;
  style?: React.CSSProperties;
  /** 互換のため受け取るが内部geometryで固定 */
  strokeWidth?: number;
  opacity?: number;
}) {
  const cx = 100;
  const cy = 120;
  const rOuter = 80;
  const gap = 6;
  return (
    <svg
      viewBox="0 0 200 150"
      fill="none"
      aria-hidden
      className={`overflow-visible ${className ?? ""}`}
      style={{ opacity, ...style }}
    >
      <defs>
        {/* 端を透明にフェード */}
        <linearGradient id="rbFadeGrad" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="black" />
          <stop offset="20%" stopColor="white" />
          <stop offset="80%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </linearGradient>
        <mask id="rbFade">
          <rect x="0" y="0" width="200" height="150" fill="url(#rbFadeGrad)" />
        </mask>
        {/* やわらかいぼかし（色のにじみ） */}
        <filter id="rbBlur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.4" />
        </filter>
      </defs>
      <g mask="url(#rbFade)" filter="url(#rbBlur)">
        {RAINBOW_BANDS.map((c, i) => {
          const r = rOuter - i * gap;
          return (
            <path
              key={c}
              d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
              stroke={c}
              strokeWidth={8}
              strokeLinecap="round"
              fill="none"
            />
          );
        })}
      </g>
    </svg>
  );
}

/** 流れる虹（細い光の筋が絹のようにたなびく）。
 *  ページのいろんな所に薄く散りばめる装飾用。サイズ/角度/濃さは props と className で。 */
export function RainbowFlow({
  className,
  style,
  opacity = 0.45,
  strands = 30,
}: {
  className?: string;
  style?: React.CSSProperties;
  opacity?: number;
  strands?: number;
}) {
  const spacing = 3.4;
  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      aria-hidden
      className={`overflow-visible ${className ?? ""}`}
      style={{ opacity, ...style }}
    >
      <defs>
        {/* 両端を透明にフェード */}
        <linearGradient id="rfFadeGrad" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="black" />
          <stop offset="16%" stopColor="white" />
          <stop offset="84%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </linearGradient>
        <mask id="rfFade">
          <rect x="0" y="0" width="320" height="220" fill="url(#rfFadeGrad)" />
        </mask>
        {/* 1本1本をぼかしてグラデーション風に */}
        <filter id="rfBlur" x="-5%" y="-40%" width="110%" height="180%">
          <feGaussianBlur stdDeviation="2.4" />
        </filter>
      </defs>
      <g mask="url(#rfFade)" filter="url(#rfBlur)">
        {Array.from({ length: strands }).map((_, j) => {
          const dy = (j - (strands - 1) / 2) * spacing;
          const t = strands === 1 ? 0 : j / (strands - 1);
          const c = RAINBOW_BANDS[Math.min(RAINBOW_BANDS.length - 1, Math.floor(t * RAINBOW_BANDS.length))];
          // 太さの変化（うねりに合わせて太く細く）
          const sw = (1.4 + 2.0 * (0.5 + 0.5 * Math.sin(j * 0.8 + 1))).toFixed(2);
          // 各筋の曲がりのゆらぎ
          const ph = Math.sin(j * 0.9) * 10;
          // 束ねる／広がる（中央でピンチ・両端で広がる）
          const a = dy * 1.35; // 始点（広がる）
          const b = dy * 0.7; // 制御点
          const m = dy * 0.38; // ピンチ
          const e = dy * 1.3; // 終点（広がる）
          return (
            <path
              key={j}
              d={`M -12 ${120 + a} C 45 ${42 + b + ph}, 95 ${42 + b - ph}, 140 ${110 + m} C 178 ${166 + b + ph}, 226 ${166 + b - ph}, 262 ${86 + m} C 296 ${34 + b + ph}, 322 ${34 + e}, 346 ${74 + e}`}
              stroke={c}
              strokeWidth={sw}
              strokeLinecap="round"
              opacity={(0.55 + 0.32 * Math.abs(Math.sin(j * 0.5))).toFixed(2)}
            />
          );
        })}
      </g>
    </svg>
  );
}

/* ───────── 虹色のクリスタル（多面体） ───────── */
const CRYSTAL_FACETS = ["#F4AEBE", "#F6C9A0", "#F3E2A4", "#A8E0C6", "#8FD0F0", "#BDB0E4"];

export function Crystal({
  className,
  style,
  opacity = 0.9,
}: {
  className?: string;
  style?: React.CSSProperties;
  opacity?: number;
}) {
  const cx = 50;
  const cy = 50;
  const r = 42;
  const pts = [-90, -30, 30, 90, 150, 210].map((a) => {
    const rad = (a * Math.PI) / 180;
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)] as const;
  });
  const fmt = (p: readonly number[]) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`;
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden className={`overflow-visible ${className ?? ""}`} style={{ opacity, ...style }}>
      <defs>
        <filter id="cryGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
        <radialGradient id="crySheen" cx="36%" cy="26%" r="78%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* グロー */}
      <circle cx={cx} cy={cy} r={r * 0.95} fill="rgba(179,174,219,0.25)" filter="url(#cryGlow)" />
      {/* 面（虹色） */}
      {pts.map((p, i) => {
        const q = pts[(i + 1) % pts.length];
        return (
          <polygon
            key={i}
            points={`${cx},${cy} ${fmt(p)} ${fmt(q)}`}
            fill={CRYSTAL_FACETS[i]}
            fillOpacity={0.66}
            stroke="#ffffff"
            strokeOpacity={0.5}
            strokeWidth={0.8}
            strokeLinejoin="round"
          />
        );
      })}
      {/* 内側のテーブル面 */}
      <polygon
        points={pts.map((p) => fmt([cx + (p[0] - cx) * 0.4, cy + (p[1] - cy) * 0.4])).join(" ")}
        fill="#ffffff"
        fillOpacity={0.4}
        stroke="#ffffff"
        strokeOpacity={0.6}
        strokeWidth={0.6}
        strokeLinejoin="round"
      />
      {/* 外周 */}
      <polygon points={pts.map(fmt).join(" ")} fill="none" stroke="#ffffff" strokeOpacity={0.8} strokeWidth={1.1} strokeLinejoin="round" />
      {/* 光沢（シーン） */}
      <polygon points={pts.map(fmt).join(" ")} fill="url(#crySheen)" />
      {/* スペキュラハイライト */}
      <ellipse cx="37" cy="29" rx="10" ry="5" fill="#ffffff" fillOpacity={0.85} transform="rotate(-28 37 29)" />
      <circle cx="32" cy="24" r="2.4" fill="#ffffff" />
      {/* きらめき（4点スター） */}
      <g fill="#ffffff">
        {[[26, 30, 7], [78, 44, 6], [58, 86, 5]].map(([px, py, s], i) => (
          <path
            key={i}
            d={`M ${px} ${py - s} L ${px + s * 0.22} ${py - s * 0.22} L ${px + s} ${py} L ${px + s * 0.22} ${py + s * 0.22} L ${px} ${py + s} L ${px - s * 0.22} ${py + s * 0.22} L ${px - s} ${py} L ${px - s * 0.22} ${py - s * 0.22} Z`}
          />
        ))}
      </g>
    </svg>
  );
}

/* ───────── 虹×クリスタル（流れる虹＋多面体・散りばめ用） ───────── */
export function CrystalFlow({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`relative ${className ?? ""}`} style={style} aria-hidden>
      <RainbowFlow className="w-full" opacity={0.78} />
    </div>
  );
}

/* ───────── ① 虹（幻想的なグラデーションの帯） ───────── */
export function MotifRainbow() {
  return (
    <div className="relative w-[min(70vw,360px)] aspect-square flex items-center justify-center">
      {BLOBS}
      <RainbowArc className="relative w-[84%]" opacity={0.9} strokeWidth={20} />
    </div>
  );
}

/* ───────── ② 双葉・芽（成長） ───────── */
export function MotifSprout() {
  return (
    <Frame>
      {/* 地面 */}
      <path d="M48 188 Q120 172 192 188" stroke="#9EDED0" strokeWidth="3" strokeLinecap="round" />
      {/* 茎 */}
      <path d="M120 186 C120 160 120 150 120 128" stroke="#3d9e8c" strokeWidth="4" strokeLinecap="round" />
      {/* 左の葉 */}
      <path
        d="M120 150 C98 150 86 134 90 122 C112 120 122 138 120 150 Z"
        fill="rgba(158,222,208,0.45)"
        stroke="#3d9e8c"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* 右の葉 */}
      <path
        d="M120 142 C142 142 154 126 150 114 C128 112 118 130 120 142 Z"
        fill="rgba(132,211,244,0.35)"
        stroke="#3d9e8c"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* 芽先のハート */}
      <path
        d="M120 118 c-3 -6 -12 -5 -12 3 c0 6 8 11 12 14 c4 -3 12 -8 12 -14 c0 -8 -9 -9 -12 -3 Z"
        fill="rgba(236,153,208,0.35)"
        stroke="#EC99D0"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* きらきら */}
      <g stroke="#84D3F4" strokeWidth="2.5" strokeLinecap="round">
        <path d="M170 96 v10 M165 101 h10" />
        <path d="M66 110 v8 M62 114 h8" />
      </g>
    </Frame>
  );
}

/* ───────── ③ 散りばめた丸（採用ページ風） ───────── */
export function MotifDots() {
  const dots = [
    { cx: 96, cy: 96, r: 46, fill: "rgba(236,153,208,0.55)" },
    { cx: 150, cy: 120, r: 38, fill: "rgba(132,211,244,0.50)" },
    { cx: 110, cy: 158, r: 30, fill: "rgba(158,222,208,0.55)" },
    { cx: 168, cy: 76, r: 20, fill: "rgba(179,174,219,0.55)" },
    { cx: 70, cy: 150, r: 16, fill: "rgba(236,153,208,0.40)" },
    { cx: 182, cy: 160, r: 13, fill: "rgba(132,211,244,0.45)" },
    { cx: 64, cy: 74, r: 11, fill: "rgba(158,222,208,0.50)" },
  ];
  return (
    <Frame>
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={d.fill} />
      ))}
      {/* アクセントの輪郭丸 */}
      <circle cx="138" cy="170" r="9" fill="none" stroke="#B3AEDB" strokeWidth="2.5" />
      <circle cx="190" cy="100" r="6" fill="none" stroke="#EC99D0" strokeWidth="2.5" />
    </Frame>
  );
}

/* ───────── ④ 無限大 ∞（ロゴのマーク） ───────── */
/** 原点中心の∞パス（幅約40・高さ約20） */
const INFINITY_PATH =
  "M-20,0 C-20,-12 -4,-12 0,0 C4,12 20,12 20,0 C20,-12 4,-12 0,0 C-4,12 -20,12 -20,0 Z";

export function MotifInfinity() {
  const small = [
    { x: 58, y: 70, s: 0.5, c: "#EC99D0" },
    { x: 186, y: 78, s: 0.42, c: "#84D3F4" },
    { x: 72, y: 168, s: 0.46, c: "#9EDED0" },
    { x: 182, y: 162, s: 0.38, c: "#B3AEDB" },
    { x: 120, y: 200, s: 0.34, c: "#EC99D0" },
  ];
  return (
    <Frame>
      <defs>
        <linearGradient id="infGrad" x1="0" y1="0" x2="240" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EC99D0" />
          <stop offset="50%" stopColor="#B3AEDB" />
          <stop offset="100%" stopColor="#84D3F4" />
        </linearGradient>
      </defs>
      {/* メインの∞（大） */}
      <g transform="translate(120 118) scale(2.3)">
        <path d={INFINITY_PATH} fill="url(#infGrad)" opacity="0.22" />
        <path d={INFINITY_PATH} fill="none" stroke="url(#infGrad)" strokeWidth="3" strokeLinejoin="round" />
      </g>
      {/* 散りばめた小さな∞ */}
      {small.map((m, i) => (
        <g key={i} transform={`translate(${m.x} ${m.y}) scale(${m.s})`}>
          <path d={INFINITY_PATH} fill="none" stroke={m.c} strokeWidth="5" strokeLinejoin="round" />
        </g>
      ))}
    </Frame>
  );
}

/* ───────── 山脈（立山連峰イメージ・使い回し用） ─────────
   3層＋雪冠でかっこいい山脈に。色は props で上書き可。 */
export function MountainRange({
  className,
  style,
  back = "#D2CDEC",
  mid = "#A9CBE8",
  front = "#6F9DC4",
}: {
  className?: string;
  style?: React.CSSProperties;
  back?: string;
  mid?: string;
  front?: string;
}) {
  return (
    <svg
      viewBox="0 0 360 200"
      fill="none"
      aria-hidden
      className={`w-full h-auto ${className ?? ""}`}
      style={style}
    >
      {/* 奥の稜線 */}
      <path d="M0 200 L60 80 L120 150 L190 50 L260 130 L320 70 L360 120 L360 200 Z" fill={back} />
      {/* 中間の稜線 */}
      <path d="M0 200 L50 120 L110 60 L175 135 L235 55 L300 125 L360 85 L360 200 Z" fill={mid} />
      {/* 手前の稜線 */}
      <path d="M0 200 L40 150 L95 80 L155 160 L215 75 L285 155 L340 100 L360 135 L360 200 Z" fill={front} />
      {/* 雪冠（手前） */}
      <g fill="#ffffff">
        <path d="M95 80 L83 103 L107 103 Z" />
        <path d="M215 75 L203 99 L227 99 Z" />
      </g>
      {/* 雪冠（中間・少し薄め） */}
      <g fill="rgba(255,255,255,0.85)">
        <path d="M110 60 L99 81 L121 81 Z" />
        <path d="M235 55 L224 76 L246 76 Z" />
      </g>
    </svg>
  );
}

/* ───────── 虹色の木（ツリー・オブ・ライフ） ─────────
   白い幹から枝が扇状に広がり、葉が左→右で虹色に。根元には流れる虹の光。 */
const TREE_PALETTE = ["#F0A6C0", "#F2A0A6", "#F6C09A", "#F4DE9C", "#CFE39A", "#A6DFC4", "#8FD0F0", "#A7B5E8", "#CBA7E2"];

export function RainbowTree({ className }: { className?: string }) {
  const cx = 180;
  const forkY = 202;
  const N = 14;
  const colorAt = (x: number) => {
    const t = Math.max(0, Math.min(0.999, (x - 64) / (296 - 64)));
    return TREE_PALETTE[Math.floor(t * TREE_PALETTE.length)];
  };

  const branches = Array.from({ length: N }, (_, b) => {
    const tt = b / (N - 1);
    const a = (Math.PI / 180) * (172 - tt * 144); // 172°〜28°（上向きの扇）
    const len = 86 + 72 * Math.sin(a);
    const dir = { x: Math.cos(a), y: -Math.sin(a) };
    const perp = { x: -dir.y, y: dir.x };
    const bow = (b % 2 === 0 ? 1 : -1) * 9;
    const tip = { x: cx + dir.x * len, y: forkY + dir.y * len };
    const ctrl = { x: cx + dir.x * len * 0.5 + perp.x * bow, y: forkY + dir.y * len * 0.5 + perp.y * bow };
    return { dir, perp, len, tip, ctrl };
  });

  const leaves: { x: number; y: number; rot: number; c: string; s: number }[] = [];
  branches.forEach(({ dir, perp, len }) => {
    const rotBase = (Math.atan2(dir.y, dir.x) * 180) / Math.PI + 90;
    [0.42, 0.55, 0.66, 0.76, 0.85, 0.93, 1.0].forEach((f) => {
      for (let sIdx = 0; sIdx < 2; sIdx++) {
        const side = sIdx === 0 ? 1 : -1;
        const off = (6 + (1 - f) * 10) * side;
        const x = cx + dir.x * len * f + perp.x * off;
        const y = forkY + dir.y * len * f + perp.y * off;
        leaves.push({ x, y, rot: rotBase + side * 22, c: colorAt(x), s: 0.8 + (1 - f) * 0.45 });
      }
    });
  });

  const R = 16;
  const roots = Array.from({ length: R }, (_, j) => {
    const side = j % 2 === 0 ? -1 : 1;
    const u = j / (R - 1);
    const reach = 64 + u * 160;
    const endX = cx + side * reach;
    const endY = 352 - u * 22;
    return { d: `M ${cx} 352 Q ${cx + side * reach * 0.5} 360 ${endX} ${endY}`, c: colorAt(endX) };
  });

  return (
    <div className={`relative w-[min(86vw,460px)] aspect-square ${className ?? ""}`}>
      <svg viewBox="0 0 360 360" fill="none" className="w-full h-full">
        {/* 根元の流れる虹 */}
        <g opacity="0.5" strokeLinecap="round" fill="none">
          {roots.map((r, i) => (
            <path key={i} d={r.d} stroke={r.c} strokeWidth="1.4" />
          ))}
        </g>
        {/* 幹 */}
        <path d="M170 356 C 163 308 156 250 175 206 L 185 206 C 204 250 197 308 190 356 Z" fill="#ffffff" />
        {/* 枝 */}
        <g stroke="#ffffff" strokeLinecap="round" fill="none">
          {branches.map((br, i) => (
            <path key={i} d={`M ${cx} ${forkY} Q ${br.ctrl.x} ${br.ctrl.y} ${br.tip.x} ${br.tip.y}`} strokeWidth="2.2" opacity="0.92" />
          ))}
        </g>
        {/* 葉（虹色） */}
        <g>
          {leaves.map((lf, i) => (
            <path
              key={i}
              transform={`translate(${lf.x} ${lf.y}) rotate(${lf.rot}) scale(${lf.s})`}
              d="M0 0 C 3.4 -4 3.4 -9.4 0 -13.4 C -3.4 -9.4 -3.4 -4 0 0 Z"
              fill={lf.c}
              opacity="0.62"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

/* ───────── ヒーロー右の合成イラスト（コラージュ風） ─────────
   立山連峰 ＋ 虹 ＋ 太陽 ＋ やわらか図形 ＋ 丸 を一枚に。 */
export function HeroScene({ className }: { className?: string }) {
  return (
    <div className={`relative w-[min(80vw,460px)] aspect-square ${className ?? ""}`}>
      <svg viewBox="0 0 360 360" fill="none" className="w-full h-full drop-shadow-sm">
        <defs>
          <clipPath id="heroSceneClip">
            <rect x="0" y="0" width="360" height="360" rx="44" />
          </clipPath>
          {/* 虹：端を透明にフェードするマスク＋やわらかいぼかし */}
          <linearGradient id="hsRbFadeGrad" x1="30" y1="0" x2="330" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="black" />
            <stop offset="22%" stopColor="white" />
            <stop offset="78%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </linearGradient>
          <mask id="hsRbFade">
            <rect x="0" y="0" width="360" height="360" fill="url(#hsRbFadeGrad)" />
          </mask>
          <filter id="hsRbBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.4" />
          </filter>
        </defs>

        {/* やわらかい下地 */}
        <rect x="0" y="0" width="360" height="360" rx="44" fill="rgba(255,255,255,0.42)" />

        <g clipPath="url(#heroSceneClip)">
          {/* コラージュ風のやわらか図形 */}
          <circle cx="280" cy="112" r="74" fill="rgba(236,153,208,0.16)" />
          <rect x="34" y="80" width="166" height="150" rx="38" fill="rgba(179,174,219,0.16)" />
          <rect x="150" y="150" width="196" height="126" rx="38" fill="rgba(132,211,244,0.14)" />

          {/* 太陽 */}
          <circle cx="278" cy="104" r="32" fill="rgba(246,231,168,0.72)" />

          {/* 虹（やわらかい7色の帯・山の奥に） */}
          <g mask="url(#hsRbFade)" filter="url(#hsRbBlur)" opacity="0.85">
            {RAINBOW_BANDS.map((c, i) => {
              const r = 150 - i * 11;
              return (
                <path
                  key={c}
                  d={`M ${180 - r} 252 A ${r} ${r} 0 0 1 ${180 + r} 252`}
                  stroke={c}
                  strokeWidth="13"
                  strokeLinecap="round"
                  fill="none"
                />
              );
            })}
          </g>

          {/* 立山連峰（手前） */}
          <g transform="translate(0 168)">
            <path d="M0 192 L60 80 L120 150 L190 50 L260 130 L320 70 L360 120 L360 192 Z" fill="#D2CDEC" />
            <path d="M0 192 L50 120 L110 60 L175 135 L235 55 L300 125 L360 85 L360 192 Z" fill="#A9CBE8" />
            <path d="M0 192 L40 150 L95 80 L155 160 L215 75 L285 155 L340 100 L360 135 L360 192 Z" fill="#6F9DC4" />
            <g fill="#ffffff">
              <path d="M95 80 L83 103 L107 103 Z" />
              <path d="M215 75 L203 99 L227 99 Z" />
            </g>
            <g fill="rgba(255,255,255,0.85)">
              <path d="M110 60 L99 81 L121 81 Z" />
              <path d="M235 55 L224 76 L246 76 Z" />
            </g>
          </g>
        </g>

        {/* 散らした丸（前面） */}
        <g>
          <circle cx="66" cy="58" r="8" fill="rgba(236,153,208,0.6)" />
          <circle cx="48" cy="86" r="5" fill="rgba(132,211,244,0.6)" />
          <circle cx="92" cy="44" r="4" fill="rgba(158,222,208,0.65)" />
          <circle cx="320" cy="256" r="7" fill="rgba(179,174,219,0.6)" />
          <circle cx="338" cy="232" r="4" fill="rgba(236,153,208,0.55)" />
        </g>
      </svg>
    </div>
  );
}

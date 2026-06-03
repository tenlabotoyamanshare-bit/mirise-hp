"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function AnimatedKeyMessage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref}>
      {/* マスクが左→右へスライドしてテキストを露出 */}
      <motion.h2
        className="text-5xl sm:text-7xl font-bold sm:whitespace-nowrap leading-[1.4] mb-8"
        style={{
          fontFamily: "var(--font-noto-serif-jp)",
          background:
            "linear-gradient(135deg, #EC99D0 0%, #B3AEDB 55%, #84D3F4 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
        initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
        animate={
          isInView
            ? { clipPath: "inset(0 0% 0 0)", opacity: 1 }
            : { clipPath: "inset(0 100% 0 0)", opacity: 0 }
        }
        transition={{
          duration: 2.4,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        あなたの未来を、
        <br className="sm:hidden" />
        一緒に描く。
      </motion.h2>

      {/* テキスト露出完了後にサブタイトルをフェードイン */}
      <motion.p
        className="text-sm sm:text-base text-[#aaa] tracking-widest"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 1.2,
          delay: 2.4,
          ease: "easeOut",
        }}
      >
        乳幼児から成人まで、ずっと寄り添う。富山の訪問看護ステーション。
      </motion.p>
    </div>
  );
}

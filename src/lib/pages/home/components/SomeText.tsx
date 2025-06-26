import { TypographyMuted } from '@/components/typography/muted';

export const SomeText = () => {
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <h1 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
        Bibs Generator Δ
      </h1>
      <div className="space-y-2">
        <p className="text-lg text-muted-foreground">
          ゼッケン用ナンバーを作成するツールです
        </p>
        <p className="text-base text-muted-foreground">
          A4サイズで印刷してください
        </p>
      </div>
      <TypographyMuted className="text-sm leading-relaxed">
        必要な場合はご自身で拡大・縮小をお願いします
        <br />
        ※ライト付きED車のフロントマスク上にちょうど収まるサイズ（縦80-90mm）にしています
      </TypographyMuted>
    </div>
  );
};

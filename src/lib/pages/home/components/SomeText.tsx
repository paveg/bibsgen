import { TypographyMuted } from '@/components/typography/muted';

export const SomeText = () => {
  return (
    <div className="grid gap-2.5">
      <h1>Bibs Generator Δ</h1>
      <p>ゼッケン用ナンバーを作成するツールです。</p>
      <p>A4サイズで印刷してください。</p>
      <TypographyMuted>
        必要な場合はご自身で拡大・縮小をお願いします。
        <br />
        ※ライト付きED車のフロントマスク上にちょうど収まるサイズ（縦80-90mm）にしています。
      </TypographyMuted>
    </div>
  );
};

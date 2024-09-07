import { TypographyMuted } from '@/components/typography/muted';

export const SomeText = () => {
  return (
    <div className="grid gap-2.5">
      <h1>Bibs Generator Δ</h1>
      <p>ゼッケン用ナンバーを作成するツールです。</p>
      <TypographyMuted>
        A4サイズで印刷してください（サイズ調整中）。
      </TypographyMuted>
    </div>
  );
};

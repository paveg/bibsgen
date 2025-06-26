import type { CheckedState } from '@radix-ui/react-checkbox';
import { Download, Palette, Type, FileText } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import InputColor, { type Color } from 'react-input-color';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  SelectTrigger,
  Select,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

const fontList = [
  {
    value: 'electricboots',
    label: 'Electric Boots',
  },
  {
    value: 'Arial',
    label: 'Arial',
  },
  {
    value: 'DotGothic16',
    label: 'DotGothic',
  },
  {
    value: 'Roboto',
    label: 'Roboto',
  },
  {
    value: 'Matemasie',
    label: 'Matemasie',
  },
];

// TODO: Implement validations
export const Generator = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [text, setText] = useState('');
  const [isItalic, setIsItalic] = useState<CheckedState>(false);
  const [isBold, setIsBold] = useState<CheckedState>(false);
  const [font, setFont] = useState(
    fontList.find((f) => f.value === 'electricboots')?.value
  );
  const [fontColor, setFontColor] = useState<Color>({
    a: 0,
    b: 0,
    g: 0,
    h: 0,
    hex: 'black',
    r: 0,
    rgba: '',
    s: 0,
    v: 0,
  });
  const [backgroundColor, setBackgroundColor] = useState<Color>({
    a: 0,
    b: 0,
    g: 0,
    h: 0,
    hex: 'white',
    r: 0,
    rgba: '',
    s: 0,
    v: 0,
  });

  const drawCanvas = useCallback(
    (canvas: HTMLCanvasElement, fontSize: number) => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background color
      ctx.fillStyle = backgroundColor.hex;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Font configuration
      const fontStyle = [
        ...(isItalic ? ['italic'] : []),
        ...(isBold ? ['bold'] : []),
        `${fontSize}px`,
        font || 'Arial',
      ].join(' ');

      ctx.font = fontStyle;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = fontColor.hex;

      if (text.trim()) {
        ctx.fillText(text, canvas.width / 2, canvas.height / 2);
      }
    },
    [text, font, fontColor, backgroundColor, isItalic, isBold]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      drawCanvas(canvas, 100);
    }
  }, [drawCanvas]);

  const handleDownload = useCallback(() => {
    if (!text.trim()) {
      return;
    }

    const downloadCanvas = document.createElement('canvas');
    downloadCanvas.width = 2893;
    downloadCanvas.height = 4092;

    drawCanvas(downloadCanvas, 1500);

    const link = document.createElement('a');
    link.download = `bib-${text.replace(/\s+/g, '_')}.png`;
    link.href = downloadCanvas.toDataURL('image/png', 1.0);
    link.click();
  }, [text, drawCanvas]);

  return (
    <div className="mx-auto w-full max-w-2xl space-y-8">
      {/* Canvas Preview Section */}
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <FileText className="h-5 w-5 text-muted-foreground" />
          <h3 className="text-lg font-semibold">プレビュー</h3>
        </div>
        <div className="flex justify-center">
          <canvas
            className="rounded-md border-2 border-border bg-white shadow-sm"
            ref={canvasRef}
            width={400}
            height={130}
          />
        </div>
      </div>

      {/* Text Input Section */}
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <Type className="h-5 w-5 text-muted-foreground" />
          <h3 className="text-lg font-semibold">テキスト設定</h3>
        </div>
        <div className="space-y-4">
          <div>
            <Label
              htmlFor="text-input"
              className="mb-2 block text-sm font-medium"
            >
              ゼッケン番号
            </Label>
            <Input
              id="text-input"
              placeholder="数字や文字を入力"
              value={text}
              onChange={(event) => setText(event.target.value)}
              className="text-center text-lg font-semibold"
            />
          </div>

          <div>
            <Label className="mb-2 block text-sm font-medium">フォント</Label>
            <Select value={font} onValueChange={(value) => setFont(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {fontList.map((f) => (
                  <SelectItem key={f.value} value={f.value}>
                    {f.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="mb-3 block text-sm font-medium">スタイル</Label>
            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="italic"
                  checked={isItalic}
                  onCheckedChange={setIsItalic}
                />
                <Label htmlFor="italic" className="text-sm">
                  斜体
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="bold"
                  checked={isBold}
                  onCheckedChange={setIsBold}
                />
                <Label htmlFor="bold" className="text-sm">
                  太字
                </Label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Color Settings Section */}
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <Palette className="h-5 w-5 text-muted-foreground" />
          <h3 className="text-lg font-semibold">カラー設定</h3>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <Label className="mb-3 block text-sm font-medium">文字色</Label>
            <div className="flex items-center space-x-3">
              <InputColor initialValue="#252525" onChange={setFontColor} />
              <span className="font-mono text-sm text-muted-foreground">
                {fontColor.hex}
              </span>
            </div>
          </div>
          <div>
            <Label className="mb-3 block text-sm font-medium">背景色</Label>
            <div className="flex items-center space-x-3">
              <InputColor
                initialValue="#FFFFFF"
                onChange={setBackgroundColor}
              />
              <span className="font-mono text-sm text-muted-foreground">
                {backgroundColor.hex}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="flex justify-center">
        <Button
          size="lg"
          onClick={handleDownload}
          disabled={!text.trim()}
          className="px-8"
        >
          <Download className="mr-2 h-4 w-4" />
          ダウンロード
        </Button>
      </div>
    </div>
  );
};

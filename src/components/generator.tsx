import type { CheckedState } from '@radix-ui/react-checkbox';
import { useEffect, useRef, useState } from 'react';
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Background color
        ctx.fillStyle = backgroundColor.hex;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = [
          ...(isItalic ? ['italic'] : []),
          ...(isBold ? ['bold'] : []),
          '100px',
          font,
        ].join(' ');
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        ctx.fillStyle = fontColor.hex;
        ctx.fillText(text, canvas.width / 2, canvas.height / 2);
      }
    }
  }, [text, font, fontColor, backgroundColor, isItalic, isBold]);

  const handleDownload = () => {
    const newCanvas = document.createElement('canvas');
    newCanvas.width = 2893;
    newCanvas.height = 4092;

    if (newCanvas) {
      const newCtx = newCanvas.getContext('2d');
      if (newCtx) {
        newCtx.clearRect(0, 0, newCanvas.width / 2, newCanvas.height / 2);

        // Background color
        newCtx.fillStyle = backgroundColor.hex;
        newCtx.fillRect(0, 0, newCanvas.width, newCanvas.height);

        newCtx.font = [
          ...(isItalic ? ['italic'] : []),
          ...(isBold ? ['bold'] : []),
          '1600px',
          font,
        ].join(' ');
        newCtx.textAlign = 'center';
        newCtx.textBaseline = 'middle';

        newCtx.fillStyle = fontColor.hex;
        newCtx.fillText(text, newCanvas.width / 2, newCanvas.height / 2);
      }
      const link = document.createElement('a');
      link.download = 'bib.png';
      link.href = newCanvas.toDataURL();
      link.click();
    }
  };

  return (
    <div>
      <div className="space-y-4">
        <canvas
          className="border-2 border-primary forced-color-adjust-none"
          ref={canvasRef}
          width={300}
          height={100}
        />
        <Input
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <Select
          defaultValue={fontList.find((f) => f.value === font)?.value}
          onValueChange={(value) => {
            setFont(value);
          }}
        >
          <SelectTrigger>
            <SelectValue>
              {fontList.find((f) => f.value === font)?.label}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {fontList.map((f) => (
              <SelectItem key={f.value} value={f.value}>
                {f.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex space-x-4">
          <div className="content-center space-x-2 align-middle">
            <Checkbox
              id="italic"
              checked={isItalic}
              defaultChecked={false}
              onCheckedChange={(checked) => {
                setIsItalic(checked);
              }}
            />
            <Label htmlFor="italic">斜体</Label>
          </div>
          <div className="content-center space-x-2 align-middle">
            <Checkbox
              id="bold"
              checked={isBold}
              defaultChecked={false}
              onCheckedChange={(checked) => {
                setIsBold(checked);
              }}
            />
            <Label htmlFor="bold">太字</Label>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex items-center space-x-2">
            <Label htmlFor="font-color-picker">文字色</Label>
            <InputColor
              key="font-color-picker"
              initialValue="#252525"
              onChange={setFontColor}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Label htmlFor="background-color-picker">背景色</Label>
            <InputColor
              key="background-color-picker"
              initialValue="#FFF"
              onChange={setBackgroundColor}
            />
          </div>
        </div>
      </div>

      <Button className="mt-6" onClick={handleDownload}>
        ダウンロード
      </Button>
    </div>
  );
};

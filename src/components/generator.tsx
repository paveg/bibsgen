import { useEffect, useRef, useState } from 'react';
import type { Color } from 'react-input-color';
import InputColor from 'react-input-color';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  SelectTrigger,
  Select,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

export const Generator = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [text, setText] = useState('');
  const [font, setFont] = useState('electricboots');
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

        ctx.font = ['100px', font].join(' ');
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        ctx.fillStyle = fontColor.hex;
        ctx.fillText(text, canvas.width / 2, canvas.height / 2);
      }
    }
  }, [text, font, fontColor, backgroundColor]);

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

        newCtx.font = ['1600px', font].join(' ');
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
          className="forced-color-adjust-none"
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
          onValueChange={(value) => {
            setFont(value);
          }}
        >
          <SelectTrigger>
            <SelectValue>{font}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="electricboots">Electric Boots</SelectItem>
            <SelectItem value="Arial">Arial</SelectItem>
            <SelectItem value="serif">serif</SelectItem>
            <SelectItem value="Roboto">Roboto</SelectItem>
          </SelectContent>
        </Select>
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

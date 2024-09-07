import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = ['48px', font].join(' ');
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, canvas.width / 2, canvas.height / 2);
      }
    }
  }, [text, font]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const link = document.createElement('a');
      link.download = 'bib.png';
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <div>
      <div className="space-y-4">
        <canvas ref={canvasRef} width={300} height={100} />

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
      </div>

      <Button className="mt-10" variant="outline" onClick={handleDownload}>
        ダウンロード
      </Button>
    </div>
  );
};

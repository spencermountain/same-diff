export interface DiffOptions {
  context_size?: number;
}

export function diffCli(input: string, output: string, options?: DiffOptions): void;
export function diffHtml(input: string, output: string, options?: DiffOptions): string;
export function diffConsole(input: string, output: string, options?: DiffOptions): void;

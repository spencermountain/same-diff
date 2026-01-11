export interface DiffOptions {
  context_size?: number
  red_color?: string
  green_color?: string
  yellow_color?: string
}

// log diff to command line
export function diffCli(
  input: string,
  output: string,
  options?: DiffOptions
): void

// create html diff
export function diffHtml(
  input: string,
  output: string,
  options?: DiffOptions
): string

// log to browser devtools console
export function diffConsole(
  input: string,
  output: string,
  options?: DiffOptions
): void

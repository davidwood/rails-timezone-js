// Type definitions for typescript

declare module "rails-timezone" {
  export function from(timezone: string): string;
  export function to(timezone: string): string;
  export function list(): string[];
}

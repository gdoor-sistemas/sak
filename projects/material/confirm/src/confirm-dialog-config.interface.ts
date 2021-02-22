import { ThemePalette } from '@angular/material/core';

export interface ConfirmDialogConfig {
  question: string; // main question, title text for the modal
  description?: string; // body content for the modal, may contain a detailed explanation for the question
  confirmText?: string; // confirm button text
  cancelText?: string; // cancel button text
  focusIndex?: 0 | 1; // button that should be focused when the modal has raised (cancel/confirm respectively)
  confirmTheme?: ThemePalette; // theme for the main button
}

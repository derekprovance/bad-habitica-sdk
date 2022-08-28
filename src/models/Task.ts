import { ChecklistItem } from './ChecklistItem';
import { Priority } from './Priority';

export type Task = {
  id?: number;
  text?: string;
  type?: string;
  notes?: string;
  tags?: Array<string>;
  value?: number;
  priority?: Priority;
  createdAt?: string;
  updatedAt?: string;
  checklist?: Array<ChecklistItem>;
}

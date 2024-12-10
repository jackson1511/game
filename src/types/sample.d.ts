export interface SampleType {
  id: number;
  name: string;
  description: string;
  optianl?: string | null | number;
}

export type SampleTypeList = SampleType[];

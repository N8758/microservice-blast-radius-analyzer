

export interface Service {
  id: string;
  name: string;
  description?: string;
  owner?: string;
  criticality: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}
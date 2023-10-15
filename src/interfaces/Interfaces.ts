export interface ICart {
  rocket_id: string;
  rocket_name: string;
  cost_per_launch: number;
  success_rate_pct: number;
  wikipedia: string;
}

export interface IRocket extends ICart {
  id: number;
  description: string;
  active: boolean;
  first_flight: string;
  country: string;
  company: string;
  height: { meters: number };
  mass: { kg: number };
}

export interface IPagination {
  carts: ICart[];
  itemsPerPage: number;
  isLoading: boolean;
}

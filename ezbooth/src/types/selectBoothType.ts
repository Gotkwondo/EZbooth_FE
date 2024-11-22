export interface selectServiceInterface {
  manage: boolean,
  create: boolean
}

export interface boothStyleInterface {
  style: 'national_open' | 'national_partition' | 'custom' | undefined,
  clear: boolean,
}

export interface selectInfoType{
  country: string | undefined,
  convention: {
    name: "Kintex, Goyang" | "Makuhari Messe, Chiba" | undefined,
    hall: "Hall 6" | undefined,
  },
  booth: number | undefined,
}

export interface selectCountryInterface {
  value: string,
  label: string,
}

export interface selectHallInterface {
  value: string,
  label: string,
}
export interface boothStyleInterface {
  style: 'National_Open' | 'National_Partition' | 'Custom' | undefined,
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


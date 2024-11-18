export interface boothStyleInterface {
  boothStyle: 'National_Open' | 'National_Partition' | 'Custom' | undefined,
}

export interface selectInfoType {
  boothStyle: boothStyleInterface | undefined,
  country: string | undefined,
  convention: {
    name: "Kintex, Goyang" | "Makuhari Messe, Chiba" | undefined,
    hall: "Hall 6" | undefined,
  },
  booth: number | undefined,
}


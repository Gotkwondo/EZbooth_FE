import { create } from 'zustand';

interface boothStoreInterface {
  style: string;
  country: string;
  booth: string;

  setStyle: (data: string) => void;
  setCountry: (data: string) => void;
  setBooth: (data: string) => void;
}

export const useBoothStore = create<boothStoreInterface>()((set) => ({
  style: '',
  country: '',
  booth: '',

  setStyle: (styleInfo) => set((state) => ({...state, styled: styleInfo})),
  setCountry: (country) => set((state) => ({ ...state, country: country })),
  setBooth: (booth) => set((state) => ({...state, booth: booth})),
}))
"use client";

import useLocalStorageState from "use-local-storage-state";

interface Wizard {
  name: string | null;
  symbol: string | null;
  meta: {
    icon: string | null;
    description: string | null;
  };
  decimals: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  ipfsURI: string | null;
}

export function useWizardState() {
  const [state, setState] = useLocalStorageState<Wizard>("token-wizard", {
    defaultValue: {
        name: null,
        symbol: null,
        meta: {
            icon: null,
            description: null
        },
        decimals: 9,
        ipfsURI: null
    },
  });
  function set(){

  }
  return [set, state];
}

import { Dispatch, SetStateAction } from "react";

type UseApi = (
  url: string,
  setData: (arg: any) => SetStateAction<any>,
  setStatus?: Dispatch<SetStateAction<boolean>>
) => void;

export const makeApiRequest: UseApi = (url, setData, setStatus) => {
  setStatus && setStatus(true);

  fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return { error: true };
      }
    })
    .then((data) => {
      if (!data.error) {
        setData(data);
      }
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setTimeout(() => {
        setStatus && setStatus(false);
      }, 500);
    });
};

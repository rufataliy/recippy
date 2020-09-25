import { Dispatch, SetStateAction } from "react";

type UseApi = (
  url: string,
  callback: (arg: any) => SetStateAction<any>,
  setStatus?: Dispatch<SetStateAction<boolean>>
) => Promise<any>;

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const makeApiRequest: UseApi = (url, callback, setStatus) => {
  setStatus && setStatus(true);
  return new Promise((resolve, reject) => {
    fetch(url, {
      mode: "cors",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return { error: true };
        }
      })
      .then((data) => {
        if (!data.error) {
          resolve(callback(data));
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
      .finally(() => {
        setTimeout(() => {
          setStatus && setStatus(false);
        }, 500);
      });
  });
};

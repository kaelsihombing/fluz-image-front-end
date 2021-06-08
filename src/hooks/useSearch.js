import { useEffect, useState } from "react";
import axios from "axios";

export default function useSearch(tag, page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setImages([]);
  }, [tag]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    var cancel;
    axios({
      method: "GET",
      url: "https://fluz-image-back-end.herokuapp.com/api/v1/images",
      params: {
        tag: tag ? tag : "landscape",
        page: page,
        perPage: 33,
      },
      cancelToken: new axios.CancelToken((c) => {
        cancel = c;
      }),
    })
      .then((res) => {
        setImages((prevImages) => {
          return [
            ...new Set([...prevImages, ...res.data.data.map((image) => image)]),
          ];
        });
        setHasMore(res.data.data.length > 0);
        if (res) setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
        return;
      });
    return () => cancel();
  }, [tag, page]);
  return { loading, error, images, hasMore };
}

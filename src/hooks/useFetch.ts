// hooks/useFetch.ts
import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

const useFetch = <T = unknown>(url: string, options?: AxiosRequestConfig) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const res = await axios(url, options);
                if (isMounted) {
                    setData(res.data);
                }
            } catch (err: any) {
                if (isMounted) setError(err.message || "Something went wrong");
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [url]);

    return { data, error, loading };
};

export default useFetch;

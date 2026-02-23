"use client";
import { useEffect, useState } from "react";

type ResultState = {
  success?: string;
  failure?: string;
  timeout?: string;
};

const successPromise = () =>
  new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Success data loaded");
    }, 1000);
  });

const failurePromise = () =>
  new Promise<string>((_, reject) => {
    setTimeout(() => {
      reject(new Error("Failed to load data"));
    }, 1500);
  });

const timeoutResolvedPromise = () =>
  new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Timeout resolved data");
    }, 3000);
  });

export default function PromiseDemo() {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<ResultState>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const runPromises = async () => {
      try {
        const results = await Promise.allSettled([
          successPromise(),
          failurePromise(),
          timeoutResolvedPromise(),
        ]);

        const [successRes, failureRes, timeoutRes] = results;

        setResult({
          success:
            successRes.status === "fulfilled" ? successRes.value : "undefined",
          failure:
            failureRes.status === "rejected"
              ? failureRes.reason.message
              : "undefined",
          timeout:
            timeoutRes.status === "fulfilled" ? timeoutRes.value : "undefined",
        });
      } catch (err) {
        setError("Unexpected error");
      } finally {
        setLoading(false);
      }
    };

    runPromises();
  }, []);

  if (loading) return <p>Loading promises...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div className="p-6 space-y-3">
      <h2 className="text-xl font-semibold">Promise Results</h2>

      <div>
        <h1>Success Promise: {result.success ?? "Not resolved"}</h1>
      </div>

      <div>
        <h1>Failure Promise: {result.failure ?? "No error"}</h1>
      </div>

      <div>
        <h1>Timeout Resolved Promise: {result.timeout ?? "  Not resolved"}</h1>
      </div>
    </div>
  );
}

"use client";
import PromiseDemo from "@/components/molecules/PromiseDemo/PromiseDemo";
import RandomSizes from "@/components/molecules/Task/RandomSizes";

export default function Task() {
  return (
    <div>
      <RandomSizes />

      <PromiseDemo />
    </div>
  );
}

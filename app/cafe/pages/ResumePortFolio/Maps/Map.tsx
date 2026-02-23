export default function SimpleMap() {
  return (
    <div className="pt-[70px] flex justify-center">
      <div className="w-full max-w-[970px]">
        <div className="relative w-full overflow-hidden">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Bengaluru+Karnataka+India&output=embed"
            className="
              w-full 
              h-[220px] sm:h-[260px] md:h-[300px]
              border-0 rounded-lg
            "
          />
        </div>
      </div>
    </div>
  );
}

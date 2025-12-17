function Grid() {
  return (
    <section
      id="grid"
      className="grid h-120 scroll-mt-32 grid-cols-2 grid-rows-3 gap-4 px-2 text-sm md:h-160 md:px-4 md:text-base xl:h-200"
    >
      <div className="bg-foreground grid place-items-center rounded-xl p-2 text-center text-black">
        Precision tracking: Real &mdash; time monitoring without noise.
      </div>
      <div className="bg-foreground grid place-items-center rounded-xl p-2 text-center text-black">
        Seamless pinning: Save products in one click.
      </div>
      <div className="bg-foreground col-span-2 grid place-items-center rounded-xl p-2 text-center text-black">
        Smart alerts: Get notified only when prices change.
      </div>
      <div className="bg-foreground grid place-items-center rounded-xl p-2 text-center text-black">
        Cross &mdash; platform sync: Your watchlist, everywhere.
      </div>
      <div className="bg-foreground grid place-items-center rounded-xl p-2 text-center text-black">
        Privacy &mdash; first: We track products, not people.
      </div>
    </section>
  );
}

export default Grid;

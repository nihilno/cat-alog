function Grid() {
  return (
    <section
      id="grid"
      className="grid h-160 scroll-mt-26 grid-cols-2 grid-rows-3 gap-4"
    >
      <div className="grid place-items-center rounded-xl border p-4 text-center">
        Precision tracking: Real &mdash; time monitoring without noise.
      </div>
      <div className="grid place-items-center rounded-xl border p-4 text-center">
        Seamless pinning: Save products in one click.
      </div>
      <div className="col-span-2 grid place-items-center rounded-xl border text-center">
        Smart alerts: Get notified only when prices change.
      </div>
      <div className="grid place-items-center rounded-xl border p-4 text-center">
        Cross &mdash; platform sync: Your watchlist, everywhere.
      </div>
      <div className="grid place-items-center rounded-xl border p-4 text-center">
        Privacy &mdash; first: We track products, not people.
      </div>
    </section>
  );
}

export default Grid;

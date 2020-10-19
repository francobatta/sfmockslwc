({
  setPeriodDate: function (cmp) {
    const dateToFormat = new Date(cmp.get("v.simulDate"));
    const monthInSpanish = dateToFormat.toLocaleString("es-ES", {
      month: "long"
    });
    const year = dateToFormat.getFullYear();
    cmp.set("v.periodOfSimulDate", `${monthInSpanish} ${year}`);
  },
  groupBy: function (xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  },
  flatten: function (arr) {
    return Array.prototype.concat.apply([], arr);
  },
  getMostFrequentElement: function (arr) {
    let counts = arr.reduce((a, c) => {
      a[c] = (a[c] || 0) + 1;
      return a;
    }, {});
    let maxCount = Math.max(...Object.values(counts));
    return Object.keys(counts).filter(
      (k) => counts[k] === maxCount
    )[0];
  }
});

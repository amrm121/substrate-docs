const analytics = {
  track: event => {
    const e = `${event}`;
    window.sa_event && window.sa_event(e);
  },
  click: event => {
    const e = `click_${event}`;
    window.sa_event && window.sa_event(e);
  },
};
export default analytics;

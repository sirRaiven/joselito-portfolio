import { Printd } from "printd";

export default defineNuxtPlugin(() => {
  const printer = new Printd();

  const printResume = (element: HTMLElement) => {
    printer.print(
      element,
      ["/resume-print.css"],
      [],
      ({ launchPrint }) => launchPrint(),
    );
  };

  return {
    provide: {
      printResume,
    },
  };
});

export const getLaneInfo = (name: string) => {
  switch (name) {
    case 'todo':
      return {
        title: 'To Do',
        bg: 'brand.purpleDivider',
        color: 'brand.purpleDivider'
      };
    case 'inprogress':
      return {
        title: 'On Progress',
        bg: 'brand.yelloDivider',
        color: 'brand.yelloDivider'
      };
    default:
      return {
        title: 'Done',
        bg: 'brand.greenDivider',
        color: 'brand.blueDivider'
      };
  }
};

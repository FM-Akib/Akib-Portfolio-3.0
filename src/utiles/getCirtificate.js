export const getCirtificates = async () => {
    try {
      const response = await fetch('/cirtificates.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const cirtificates = await response.json();
      return cirtificates;
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      return [];
    }
  };
  
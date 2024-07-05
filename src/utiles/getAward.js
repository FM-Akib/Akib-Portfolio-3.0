export const getAwards = async () => {
    try {
      const response = await fetch('/award.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const projects = await response.json();
      return projects;
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      return [];
    }
  };
  
export const getSkills = async () => {
    try {
      const response = await fetch('/skills.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const skills = await response.json();
      return skills;
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      return [];
    }
  };
  
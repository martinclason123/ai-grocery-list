const getGroceryList = async (prompt) => {
  try {
    const response = await fetch("/api/generic_endpoint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch meals.");
    }

    const data = await response.json();
    const lines = data.choices[0].text
      .split("\n")
      .filter((line) => line.trim() !== "");
    const formattedList = [];

    for (const line of lines) {
      if (line.includes("Shopping List")) {
        continue;
      } else if (line.includes(":")) {
        const department = line.slice(0, line.indexOf(":")).trim();
        formattedList.push({ department, list: [] });
      } else {
        formattedList[formattedList.length - 1].list.push(line.trim());
      }
    }

    console.log(formattedList);
    return formattedList;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getGroceryList;

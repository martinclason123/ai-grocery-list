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
    console.log(data.choices[0]);
    /* data.choices[0] looks like this if logged:
       {text: '\n\nAldi Shopping List:\n\nProduce:\n2 red bell peppers…e\nRice vinegar\nHoney\n\nBakery:\n4-6 flour tortillas', index: 0, logprobs: null, finish_reason: 'stop'}

      I would like the data reformatted so it can be returned as an array of objects instead. for example
      [{department: "Produce", list: [carrots, peas]}, {department: "Meat", list: ["2 boneless skinless chicken breasts"]}] 

      The title "Aldi Shopping List" can be discarded
    */
    const lines = data.choices[0].text
      .split("\n")
      .filter((line) => line.trim() !== "");
    const formattedList = [];

    for (const line of lines) {
      if (line.includes("Shopping List")) {
        continue;
      } else if (line.endsWith(":")) {
        formattedList.push({ department: line.slice(0, -1), list: [] });
      } else {
        formattedList[formattedList.length - 1].list.push(line);
      }
    }

    console.log(formattedList);
    return formattedList;
  } catch (error) {
    console.log(error);
  }
};

export default getGroceryList;

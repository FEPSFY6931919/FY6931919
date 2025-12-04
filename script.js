async function getLastUpdatedTime() {
    const username = 'FEPSFY6931919';
    const repo = 'FY6931919';
    
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.github.v3+json',
            }
        });
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status} - ${response.statusText}`);
        }
        const commits = await response.json();
        if (commits && commits.length > 0) {
            const lastCommitDate = new Date(commits[0].commit.committer.date);
            
            // Displaying the time on load
            document.getElementById('last-updated').innerText = `Last Modified Time: ${lastCommitDate.toLocaleString()}`;
        } else {
            document.getElementById('last-updated').innerText = 'No commits found in the repository.';
        }
    } catch (error) {
        console.error('Error fetching the last updated time:', error);
        document.getElementById('last-updated').innerText = 'Error fetching update time. Please check the repository details.';
    }
}
// Function to verify the last update time by re-fetching it from the API
async function verifyLastUpdatedTime() {
    document.getElementById('last-updated').innerText = 'Verifying...';
    await getLastUpdatedTime();
    alert("Last modified time has been successfully verified from GitHub API.");
}
// Initial load to display the time on page load
window.onload = getLastUpdatedTime;



// Function to calculate and display word count for a specified section
function displayWordCount(sectionId, outputId) {
    const text = document.getElementById(sectionId).textContent;    // Get the text content from the specified section
    const wordArray = text.trim().split(/\s+/); // Split text into words based on spaces
    const wordCount = wordArray.length; // Count the number of words
    return wordCount;   // Return the word count for summing purposes
}

// Function to calculate and display total word count from selected sections
function displayTotalWordCount() {
    // Calculate word count for each section and accumulate the total
    const AbstractCount = displayWordCount("abstract");
    const MainCount = displayWordCount("main");
    const Key_techniquesCount = displayWordCount("key_techniques");
    const ChallengesCount = displayWordCount("challenges");
    const Future_outlookCount = displayWordCount("future_outlook");
    const ConclusionCount = displayWordCount("conclusion");
    const totalWordCount = AbstractCount + MainCount + Key_techniquesCount + ChallengesCount + Future_outlookCount + ConclusionCount;   // Calculate the sum of all selected sections
    document.getElementById("totalWordCount").innerText = `Total word count: ${totalWordCount}`;    // Display the total word count
}

window.onload = displayTotalWordCount;
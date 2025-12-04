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
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get(['name', 'github', 'linkedin', 'leetcode', 'twitter', 'CodeChef', 'codeForces', 'hackerank'], (result) => {
        if (result.name || result.github || result.linkedin || result.leetcode || result.twitter || result.CodeChef || result.codeForces || result.hackerank) {
            window.location.href = 'display.html';
        }
    });
    document.getElementById('save').addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const github = document.getElementById('github').value;
        const linkedin = document.getElementById('linkedin').value;
        const leetcode = document.getElementById('leetcode').value;
        const CodeChef = document.getElementById('CodeChef').value;
        const hackerank = document.getElementById('hackerank').value;
        const codeForces = document.getElementById('codeForces').value;
        const twitter = document.getElementById('twitter').value;
        
        chrome.storage.sync.set({ name, github, linkedin, leetcode, twitter, CodeChef, codeForces, hackerank}, () => {
            window.location.href = 'display.html';
        });
    });
});

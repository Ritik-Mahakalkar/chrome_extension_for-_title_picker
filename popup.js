const btn=document.getElementById('fetch-title')

btn.addEventListener('click', async() => {
    
   await  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0];
        if (currentTab) {
            
            document.getElementById('tab-title').textContent = currentTab.title;
           
        } else {
            document.getElementById('tab-title').textContent = "No Title  found!";
        }
    });
});
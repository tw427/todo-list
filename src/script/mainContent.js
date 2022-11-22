import task from '../images/task-svgrepo-com.svg';
import trash from '../images/trash-bin-svgrepo-com.svg';
import edit from '../images/write-svgrepo-com.svg';

export const projectList = [];
const main = document.querySelector('main');

export const Project = function(title, date, priority, desc) {
    this.title = title;
    this.date = date;
    this.priority = priority;
    this.desc = desc;
}

export let projectDOM = function(title, date, priority, desc) {
    const projSections = ['complete', 'title', 'deadline', 'options'];
    const projectContainer = document.createElement('div');
    const projCard = document.createElement('div');

    projSections.forEach(name => {
        switch(name) {
            case 'complete':
                const completeCheck = document.createElement('input');
                completeCheck.setAttribute('class', `${name}`);
                completeCheck.setAttribute('type', 'checkbox');
                projCard.append(completeCheck);
                break;
            case 'options':
                const optionIcons = document.createElement('div');

                const taskIcon = new Image();
                taskIcon.src = task;
                taskIcon.classList.add('taskBtn');
                const editIcon = new Image();
                editIcon.src = edit;
                editIcon.classList.add('editBtn');
                const trashIcon = new Image();
                trashIcon.src = trash;
                trashIcon.classList.add('trashBtn');

                optionIcons.setAttribute('class', `${name}`);
                optionIcons.append(taskIcon, editIcon, trashIcon);
                projCard.append(optionIcons);
                break;
            default:
                const txtDetail = document.createElement('p');

                if(name == 'title') {
                    txtDetail.innerHTML = `${title}`;
                } else if(name == 'deadline') {
                    txtDetail.innerHTML = `${date}`;
                }

                txtDetail.setAttribute('class', `${name}`);
                
                projCard.append(txtDetail);
                break;
            }
        });

        switch(priority) {
            case "1":
                projCard.style.backgroundColor = "#fcfcfc";
                break;
            case "2":
                projCard.style.backgroundColor = "rgb(188 205 249)";
                break;
            case "3":
                projCard.style.backgroundColor = "#adf7d1";
                break;
            case "4":
                projCard.style.backgroundColor = "rgb(249 132 132)";
                break;
        }
        
        projCard.setAttribute('id', `project-${projectList.length}`);
        projCard.setAttribute('class', `project`);
        projectContainer.append(projCard)
        projectContainer.setAttribute('class', 'projContainer');
        main.append(projectContainer);
}

//gh-pages
// if (name == 'complete') {
//     const completeCheck = document.createElement('input');
//     completeCheck.setAttribute('class', `${name}`);
//     completeCheck.setAttribute('type', 'checkbox');
//     projCard.append(completeCheck);
// } else {
//     const label = document.createElement('p');
    
//     let capFirst = name.slice(0, 1);
//     let restOfName = name.slice(1);
//     label.innerHTML = `${capFirst.toUpperCase()}${restOfName}`;
//     label.setAttribute('class', `${name}`);
    
//     projCard.setAttribute('id', `project-${projectList.length}`);
//     projCard.setAttribute('class', `project`);
    
//     projectContainer.append(projCard)
//     projCard.append(label);
// }
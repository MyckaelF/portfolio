
const projectData = [
    {
        id: 1,
        projectName: 'Projeto Blogr',
        imgSrc: 'images/projetoBlogr.webp',
        shortDescription: 'Projeto construído com HTML, CSS e Javascript. No que se consiste esse projeto? É uma landing page de uma empresa fictícia a qual promove um editor para gerenciamento de blogs.',
        longDescription: 'Esse projeto se consiste em uma landing page de uma ferramenta para edição de blogs open source, essa landing page é um case de estudos, ou seja, foi um site desenvolvido a partir de um design porém não possui a área de navegação funcional, mas o site fora isso é 100% funcional. O site é 100% responsivo, em outras palavras ele se adapta independentemente do tamanho da tela, foi desenvolvido 100% em HTML, CSS e Javascript, se quiser ver o projeto funcionando, ao lado existe uma mini-exibição e abaixo tem um link do projeto em funcionamento em tempo real.',
        skills: ['HTML', 'CSS', 'Javascript', 'Landing page', 'Case de estudo'],
        projectLink: 'https://blogr-landingpagek.netlify.app'
    },
    
    {
        id: 2,
        projectName: 'Projeto Url Shortening',
        imgSrc: 'images/shortening.webp',
        shortDescription: 'Projeto construído com HTML, CSS e Javascript. Esse projeto se consiste em um site que encurta links através de uma API, site responsivo e com alta performance.',
        longDescription: 'Esse projeto foi construído em HTML, CSS e javascript e ele se trata de uma landing page que contém um encurtador de links dentro da mesma, esse site também se trata de um case de estudos. Mas como esse site de fato funciona? O usuário preenche o campo de input e o Javascript faz a checagem por meio de um regex se o que foi inserido é realmente uma URL, ou se o campo está vazio, estando tudo certo o sistema envia a URL para a API que retorna o endereço já encurtado que é exibido na tela junto de um botão de copiar (ou para os mais leigos o sistema pega o texto digitado, verifica se é uma URL e devolve o link encutado da mesma), fique a vontade para testar a funcionalidade com a amostra ao lado e se quiser ver o site completo em todos os seus tamanhos de tela o link está abaixo.',
        skills: ['HTML', 'CSS', 'Javascript', 'Landing page', 'Case de estudo'],
        projectLink: 'https://shortly-url-shortening-apik.netlify.app/'
    },

    {
        id: 3,
        projectName: 'Projeto EasyBank',
        imgSrc: 'images/easybank.webp',
        shortDescription: 'Projeto construído com HTML, CSS e Javascript. Nesse projeto uma landing page de um banco fictício foi construído com um layout bem detalhado.',
        longDescription: 'Projeto construído com HTML, CSS e Javascript, esse projeto se trata de uma landing page de um banco fictício chamado EasyBank, a página tem diversos efeitos com degradê, estados de hover e um site 100% responsivo sendo adaptável para todos os tamanhos de tela, esse projeto também é um case de estudos e foi construído em média de 2 dias. Ao lado tem uma demonstração do site, porém se desejar vê-lo em todos os tamanhos de tela é só clicar no botão abaixo.',
        skills: ['HTML', 'CSS', 'Javascript', 'Landing page', 'Case de estudo'],
        projectLink: 'https://easy-bank-landingpagek.netlify.app/'
    },

    {
        id: 4,
        projectName: 'Projeto Loopstudios',
        imgSrc: 'images/loopstudios.webp',
        shortDescription: 'Projeto construído com HTML, CSS e Javascript. Esse site é uma landing page focado em um estúdio de games, com um sistema de grid responsivo e um menu mobile bem detalhado.',
        longDescription: 'Projeto construído com HTML, CSS e Javascript. O projeto Loopstudios se trata de uma landing page que foca no público de jogos VR, com foco na imersão dentro dos jogos. Esse site possui um sistema de grid com 8(oito) categorias com estados de hover que altera o brilho da imagem e a cor do texto deixando assim o texto em destaque ao passar o mouse na categoria. O site é 100% responsivo e você pode ver uma ilustração ao lado, mas se preferir é só clicar no botão abaixo para que possa ver em todos os tamanhos de telas. ',
        skills: ['HTML', 'CSS', 'Javascript', 'Landing page', 'Case de estudo'],
        projectLink: 'https://loopstudios-landing-pagek-main.netlify.app/'
    },

    {
        id: 5,
        projectName: 'Projeto Sunnyside',
        imgSrc: 'images/sunnyside.webp',
        shortDescription: 'Projeto construído com HTML, CSS e Javascript. Esse projeto é uma landing page de uma agência que ajuda marcas a crescer rapidamente, site responsivo e com bastante detalhes.',
        longDescription: 'Projeto construído com HTML, CSS e Javascript. Esse projeto se consiste em uma landing page de uma agência que ajuda no branding das marcas e com criatividade auxiliam as empresas a chegarem em outro patamar, o design dessa página é bem diferenciado já que tem bastante cores remetendo à criatividade que é um dos seus lemas e com um design responsivo que se adapta independentemente do tamanho da tela. Ao lado tem uma ilustração do site, porém se quiser vê-lo em todos os tamanhos de tela é só clicar no botão abaixo que será redirecionado à página.',
        skills: ['HTML', 'CSS', 'Javascript', 'Landing page', 'Case de estudos'],
        projectLink: 'https://sunnyside-agency-landing-pagek.netlify.app/'
    },

    {
        id: 6,
        projectName: 'Projeto Time tracking',
        imgSrc: 'images/timeTracking.webp',
        shortDescription: 'Projeto construído com HTML, CSS e Javascript. Esse projeto se trata de um gerenciador de tempo que separa por dia, semana e mês a quantidade de horas que o usuário gasta com determinada atividade.',
        longDescription: 'Projeto construído com HTML, CSS e Javascript. Esse projeto se trata de um sistema que registra as horas de determinadas atividades realizadas pelo usuário, essas horas são divididas por dia, semana e mês. Nesse projeto em específico as horas foram alimentadas por um arquivo pronto(Json para os íntimos), mas em outros casos seria alimentado pelo próprio localStorage do navegador, por API ou banco de dados para algo mais escalável, o design desse site se resume um uma grid com todos as divisões de atividades e uma coluna só do usuário onde é possível selecionar o período que deseja checar (dia, semana ou mês) junto do perfil do usuário com foto e nome. Ao lado tem uma ilustração do site, porém se quiser vê-lo em todos os tamanhos de tela é só clicar no botão abaixo que será redirecionado à página.',
        skills: ['HTML', 'CSS', 'Javascript', 'Landing page', 'Case de estudos'],
        projectLink: 'https://time-tracking-dashboard-mf.netlify.app/'
    },

    {
        id: 7,
        projectName: 'Projeto em desenvolvimento',
        imgSrc: 'images/desenvolvimentoImg.png',
        shortDescription: 'Em desenvolvimento',
        skills: ['Desenvolvimento'],
        longDescription: 'Site em desenvolvimento...',
        projectLink: '/desenvolvimento.html'
    },

    {
        id: 8,
        projectName: 'Projeto em desenvolvimento',
        imgSrc: 'images/desenvolvimentoImg.png',
        shortDescription: 'Em desenvolvimento',
        skills: ['Desenvolvimento'],
        longDescription: 'Site em desenvolvimento...',
        projectLink: '/desenvolvimento.html'
    },
]

const projectDetails = document.querySelector('[projectDetails]')
const usedSkillsDiv = projectDetails.querySelector('.usedSkills')
const boxes = document.querySelector('[data-boxes]')

function createBoxes () {
    projectData.forEach((item) => {
        let box = document.createElement('div')
        box.classList.add('box')

        createBoxContent(box, item)

        boxes.appendChild(box)
    })
}

function createBoxContent(box, item) {
    let imageBox = document.createElement('div')
    imageBox.classList.add('imageBox')

    let img = document.createElement('img')
    img.src = item.imgSrc
    img.setAttribute('alt', 'illustration project')

    imageBox.appendChild(img)

    let containerTexts = document.createElement('div')
    containerTexts.classList.add('containerTexts')

    let arrElements = ['h3', 'p', 'moreDetails', 'link']

    arrElements.forEach( arrElement => {
        buildContainer(containerTexts, item, arrElement)
    })

    boxAppend(box, imageBox)
    boxAppend(box, containerTexts)

}

function buildContainer(container, item, caseItem) {

    switch(caseItem) {
        case 'h3':
            let h3 = document.createElement('h3')
            h3.textContent = item.projectName
            container.appendChild(h3)
            break
        case 'p': 
            let p = document.createElement('p')
            p.textContent = item.shortDescription
            container.appendChild(p)
            break
        case 'moreDetails':
            let button = document.createElement('a')
            button.setAttribute('data-moreDetails', '')
            button.href = `#projects`
            button.textContent = 'Mais Detalhes'
            container.appendChild(button)
            break
        case 'link':
            let link = document.createElement('a')
            link.classList.add('linkProject')
            link.href = item.projectLink
            link.target = '_blank'
            link.textContent = 'Ver online'
            container.appendChild(link)
            break
    }
}

function boxAppend (box, child) {
    box.appendChild(child)
}

function CreateDetailsPage(index) {
    const iframe = projectDetails.getElementsByTagName('iframe')
    const detailsLink = projectDetails.getElementsByTagName('a')
    const longDescriptionP = projectDetails.getElementsByTagName('p')
    longDescriptionP[0].textContent = projectData[index].longDescription
    projectData[index].skills.forEach( skill => {
        const Pskill = document.createElement('p')
        Pskill.textContent = skill
        boxAppend(usedSkillsDiv, Pskill)
    })
    putAttr(detailsLink[0], 'href', projectData[index].projectLink)
    putAttr(iframe[0], 'src', projectData[index].projectLink)
}

function putAttr(element, attr, content) {
    element.setAttribute(attr, content)
}

createBoxes()
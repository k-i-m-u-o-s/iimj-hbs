/* =====================================================
HEADER SCROLL
===================================================== */

/*
Find header
*/
const header = document.querySelector(".site-header");

/*
Run only if header exists
*/
if (header) {
  window.addEventListener("scroll", () => {
    /*
    When scroll > 80
    add .scrolled
    */

    if (window.scrollY > 80) {
      header.classList.add("scrolled");
    } else {
      /*
    Back to top
    remove .scrolled
    */
      header.classList.remove("scrolled");
    }
  });
}

/* =====================================================
DESKTOP DROPDOWNS
===================================================== */

// Desktop nav items only

const navItems = document.querySelectorAll(
  ".desktop-nav .nav-item, .about-secondary-nav .nav-item",
);

navItems.forEach((item) => {
  // Delay closing to prevent flicker

  let closeDelay;

  // Open immediately

  item.addEventListener("mouseenter", () => {
    clearTimeout(closeDelay);

    item.classList.add("is-open");
  });

  // Close after short delay

  item.addEventListener("mouseleave", () => {
    closeDelay = setTimeout(() => {
      item.classList.remove("is-open");
    }, 150);
  });
});
/* =====================================================
OVERLAY MENU
STEP 4.14
Open / Close Overlay
===================================================== */

/* ---------------------------------
Elements
--------------------------------- */

const menuToggle = document.querySelector("[data-menu-toggle]");

const menuClose = document.querySelector(".menu-close");

/* ---------------------------------
OPEN MENU
--------------------------------- */

menuToggle?.addEventListener("click", () => {
  resetOverlay();

  document.body.classList.add("menu-open");
});

/* ---------------------------------
CLOSE MENU
--------------------------------- */

menuClose?.addEventListener("click", () => {
  resetOverlay();

  document.body.classList.remove("menu-open");
});

/* ---------------------------------
ESC KEY CLOSE
--------------------------------- */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    resetOverlay();
    document.body.classList.remove("menu-open");
  }
});
/* =====================================================
OVERLAY NAVIGATION
===================================================== */
const mobileLinks = document.querySelectorAll(".mobile-link");

const menuPanels = document.querySelectorAll(".menu-panel");

const submenuTriggers = document.querySelectorAll(".submenu-trigger");

const submenuPanels = document.querySelectorAll(".submenu-panel");

const submenuDivider = document.querySelector(".submenu-divider");

/* =====================================================
RESET OVERLAY
===================================================== */

function resetOverlay() {
  menuPanels.forEach((panel) => {
    panel.classList.remove("is-active");
  });

  submenuPanels.forEach((panel) => {
    panel.classList.remove("is-active");
  });

  mobileLinks.forEach((link) => {
    link.classList.remove("is-active");
  });
  document.querySelectorAll(".mobile-item").forEach((item) => {
    item.classList.remove("is-open");
  });

  submenuTriggers.forEach((link) => {
    link.classList.remove("is-active");
  });

  submenuDivider?.classList.remove("is-visible");
}
/* =====================================================
MAIN MENU SWITCHER
===================================================== */

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const panelName = link.dataset.panel;

    /* Reset everything */

    resetOverlay();

    /* Activate clicked menu */

    link.classList.add("is-active");
    link.closest(".mobile-item")?.classList.add("is-open");

    /* Show matching panel */

    const activePanel = document.querySelector(
      `.menu-panel[data-panel="${panelName}"]`,
    );

    if (activePanel) {
      activePanel.classList.add("is-active");

      /* Reset scroll position */

      activePanel.scrollTop = 0;

      const subContent = document.querySelector(".global-menu-subcontent");

      if (subContent) {
        subContent.scrollTop = 0;
      }

      /* Open first submenu automatically */

      // const firstTrigger = activePanel.querySelector(".submenu-trigger");

      // if (firstTrigger) {
      //   firstTrigger.click();
      // }
    }
  });
});
/* =====================================================
SUBMENU SWITCHER
===================================================== */

submenuTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    submenuTriggers.forEach((item) => {
      item.classList.remove("is-active");
    });

    submenuPanels.forEach((panel) => {
      panel.classList.remove("is-active");
    });

    trigger.classList.add("is-active");

    const panel = document.querySelector(
      `.submenu-panel[data-subpanel="${trigger.dataset.subpanel}"]`,
    );

    if (panel) {
      panel.classList.add("is-active");

      submenuDivider?.classList.add("is-visible");
    }
  });
});
/* =====================================================
LOCK OVERLAY LINKS
===================================================== */

document.querySelectorAll(".menu-panel a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

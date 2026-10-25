@'
# Project Handover — LG-Ref Production Monitoring System

## 1. Project Status

- Stage: Initial workspace setup
- Project path: `D:\LG-Ref`
- Git branch: `main`
- Frontend: Not initialized
- Backend: Not initialized
- Database: Local MongoDB is installed and responding
- Application code: Not created
- Git commits: None yet

## 2. Confirmed Decisions

- Build a new application from scratch using the MERN stack.
- Use React for the frontend, Node.js and Express for the backend, and MongoDB for persistence.
- Keep the primary navigation tabs horizontally below the top navbar.
- Do not replace the intended application with static reference HTML.
- Keep original reference materials in `docs/reference/`.
- Verify existing files and current Git status before making changes.
- Do not claim that a feature, test, or operation succeeded without verification.

## 3. Planned Application Areas

- Dashboard
- Production and scanning
- Reports and exports
- Settings for authorized users
- User, plant, location, part/model, shift, target, and defect-category management

These are planned areas, not implemented features.

## 4. Requirements Still to Confirm

- Exact fields and relationships for parts and models
- User roles and permissions
- Plant and location relationships
- Shift timings and hourly-slot rules
- Production target rules
- Barcode/QR format and duplicate-scan behavior
- Reject/rework recording and quantity rules
- Dashboard calculations
- Report formats and filters
- Factory timezone and deployment environment
- Original reference HTML files and screenshots

Do not silently invent business rules. Ask for clarification when a decision affects correctness.

## 5. Environment

- Operating system: Windows
- Project directory: `D:\LG-Ref`
- Editor: Visual Studio Code
- Node.js and npm are installed
- Git is installed
- Local MongoDB service is running and the local connection was tested successfully
- MongoDB reported access control disabled. Keep it local and do not expose it to a network.

## 6. Current Folder Structure

    D:\LG-Ref\
    ├── client\
    ├── server\
    ├── docs\
    │   └── reference\
    ├── .gitignore
    ├── README.md
    └── PROJECT_HANDOVER.md

The documentation files listed above are expected to be created during the current setup step. Verify their existence before relying on this section.

## 7. Completed Work

- Created `client/`.
- Created `server/`.
- Created `docs/`.
- Created `docs/reference/`.
- Initialized a Git repository and selected the `main` branch.

## 8. Current Verification

- Folder creation was confirmed through PowerShell output.
- Application code and dependencies have not been created or installed.
- No Git commit has been made.

## 9. Next Steps

1. Verify `.gitignore`, `README.md`, and `PROJECT_HANDOVER.md`.
2. Review the documentation in VS Code.
3. Create the frontend with Vite and React.
4. Initialize the Express backend separately.
5. Configure environment variables safely.
6. Verify each setup step before proceeding.
7. Commit the verified initial setup to Git.

## 10. Instructions for the Next AI Session

First inspect this file, the actual project tree, `git status`, and any existing source files. Treat this document as a handover note, not proof that an operation succeeded. Compare it with the real workspace and correct discrepancies before editing.

Do not overwrite existing work. Do not install packages, modify files, or implement features without following the current user's instructions. At the end of a work session, report the actual changes, verification results, unresolved questions, Git state, and exact next steps. Update this handover file when meaningful progress is made.
'@ | Set-Content -Encoding utf8 PROJECT_HANDOVER.md
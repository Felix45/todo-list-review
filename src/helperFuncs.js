class Helper {
    static checkBoxHandler = (taskstore) => {
      const checkBox = document.querySelectorAll('input[type=checkbox]');
      checkBox.forEach((box) => {
        box.addEventListener('change', (event) => {
          const task = event.target.parentNode.querySelector('.desc');
          task.classList.toggle('line-through');
          taskstore.setTaskStaus(parseInt(event.target.id, 10) - 1);
        });
      });
    };

    static deleteButtonsHandler = (taskstore) => {
      const btnDelete = document.querySelectorAll('.btnDelete');
      btnDelete.forEach((btn) => {
        btn.addEventListener('click', (event) => {
          taskstore.removeTask(false, parseInt(event.target.getAttribute('data-index'), 10));
        });
      });
    };

    static editCommon = (event, taskstore) => {
      const id = parseInt(event.target.getAttribute('data-pos'), 10);
      const data = event.target.value;
      taskstore.editTask({ id, data });
      event.target.disabled = true;
      event.target.parentNode.querySelector('.edit-desc').classList.toggle('d-none');
    }

    static editElipsisHandler = (taskstore) => {
      const editFields = document.querySelectorAll('.desc');

      editFields.forEach((editField) => editField.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          Helper.editCommon(event, taskstore);
        }
      }));

      editFields.forEach((editField) => editField.addEventListener('change', (event) => {
        Helper.editCommon(event, taskstore);
      }));
    };

    static editTextHandler = () => {
      const ellipsis = document.querySelectorAll('.edit-desc');
      const editFields = document.querySelectorAll('.desc');

      ellipsis.forEach((ellipse) => {
        ellipse.addEventListener('click', (event) => {
          editFields.forEach((editField) => {
            Helper.resetTextFields(editField);
          });
          Helper.enableCurrentInput(event);
        });
      });
    }

    static resetTextFields = (editField) => {
      editField.disabled = true;
      editField.parentNode.classList.remove('high-light');
      editField.parentNode.querySelector('.edit-desc').classList.remove('d-none');
      editField.parentNode.querySelector('.fa-trash').classList.add('d-none');
    }

    static enableCurrentInput = (event) => {
      event.target.parentNode.classList.add('high-light');
      const taskInput = event.target.parentNode.querySelector('.desc');
      const deleteButton = event.target.parentNode.querySelector('.fa-trash');
      taskInput.disabled = false;
      taskInput.focus();
      event.target.classList.toggle('d-none');
      deleteButton.classList.toggle('d-none');
    }
}

export default Helper;
function swalMessage(_title, _text, _icon, _confirmText) {
  Swal.fire({
    title: _title,
    text: _text,
    icon: _icon,
    confirmButtonText: _confirmText,
  });
}

function swalDecide(_title, _text, _icon, _confirmText) {
  Swal.fire({
    title: _title,
    text: _text,
    icon: _icon,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: _confirmText,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
}

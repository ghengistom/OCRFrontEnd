

console.log("In MVVM.js");

// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {

  this.OCRType = ko.observable("0");
  this.Languages = ko.observable("language ID");
  this.RetainLineNumbering = ko.observable("0");
  this.PictureHandling = ko.observable("0");
  this.Deskew = ko.observable("0");
  this.DespeckleEnabled = ko.observable("0");
  this.Rotation = ko.observable("0");
  this.PDFVersion = ko.observable("0");
  this.Linearize = ko.observable("0");
  this.MetadataAuthor = ko.observable("PDF Author");
  this.MetadataKeywords = ko.observable("PDF Keywords");
  this.MetadataSubject = ko.observable("PDF Subject");
  this.MetadataTitle = ko.observable("PDF Title");
  this.CompForContents = ko.observable("0");
  this.CompForTiff = ko.observable("0");
  this.UseFlate = ko.observable("0");
  this.UseJBIG2 = ko.observable("0");
  this.UseJPEG2000 = ko.observable("0");
  this.UseLZWInsteadOfFlate = ko.observable("0");
  this.UseMRC = ko.observable("0");
  this.SecurityUse = ko.observable("0");
  this.SecurityEncryption = ko.observable("None");
  this.SecurityOwnerPassword = ko.observable("PDF owner password");
  this.SecurityUserPassword = ko.observable("PDF user password");
  this.SecurityCanPrint = ko.observable("0");
  this.SecurityCanEdit = ko.observable("0");
  this.SecurityCanAnnotate = ko.observable("0");
  this.SecurityCanFillInFormFields = ko.observable("0");
  this.SecurityCanMakeAccessible = ko.observable("0");
  this.SecurityCanAssemble = ko.observable("0");
  this.SecurityCanPrintHiResolution = ko.observable("0");







  /*
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");

    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();
    }, this);

    this.capitalizeLastName = function() {
        var currentVal = this.lastName();        // Read the current value
        this.lastName(currentVal.toUpperCase()); // Write back a modified value
    };
    */
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());

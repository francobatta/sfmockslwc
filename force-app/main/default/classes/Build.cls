//Generated by BuildGenerator v1.7
@isTest global class Build {

	/*------------------------------------------------------------------------
	             LeadBuilderStart
	------------------------------------------------------------------------*/
	 public class LeadBuilder {
		private Lead obj = new Lead(LastName = 'STRING',
			Company = 'STRING',
			Status = 'Open - Not Contacted'
		);

		public LeadBuilder withLastName(String value) {
			 obj.LastName = value;
			 return this;
		}

		public LeadBuilder withCompany(String value) {
			 obj.Company = value;
			 return this;
		}

		public LeadBuilder withEmail(String email) {
			obj.Email = email;
			return this;
		}

		 public Lead build() {
			 return obj;
		}

	}

	public static LeadBuilder aLead() { return new LeadBuilder(); }

	/*------------------------------------------------------------------------
	             LeadBuilderEnd
	------------------------------------------------------------------------*/

	/*------------------------------------------------------------------------
	             CaseBuilderStart
	------------------------------------------------------------------------*/
	public class CaseBuilder {
		private Case obj = new Case();

		public CaseBuilder withContactId(Contact value) {
			 obj.ContactId = value.Id;
			 return this;
		}

		public CaseBuilder withType(String t) {
			obj.Type = t;
			return this;
		}

		public CaseBuilder withAccountId(Account value) {
			obj.AccountId = value.Id;
			return this;
	   }

		public CaseBuilder withSubject(String sub) {
			obj.Subject = sub;
			return this;
		}

		public CaseBuilder withStatus(String status) {
			obj.Status = status;
			return this;
		}

		 public Case build() {
			 return obj;
		}

	}

	public static CaseBuilder aCase() { return new CaseBuilder(); }

	/*------------------------------------------------------------------------
	             CaseBuilderEnd
	------------------------------------------------------------------------*/
	/*------------------------------------------------------------------------
	             AccountBuilderStart
	------------------------------------------------------------------------*/
	public class AccountBuilder {
		private Account obj = new Account(Name = 'STRING');

		public AccountBuilder withName(String value) {
			 obj.Name = value;
			 return this;
		}

		public AccountBuilder withId(Id id) {
			obj.Id = id;
			return this;
		}

		 public Account build() {
			 return obj;
		}

	}

	public static AccountBuilder anAccount() { return new AccountBuilder(); }

	/*------------------------------------------------------------------------
	             AccountBuilderEnd
	------------------------------------------------------------------------*/

		/*------------------------------------------------------------------------
	             TaskBuilderStart
	------------------------------------------------------------------------*/
	public class TaskBuilder {
		private Task obj = new Task();

		public TaskBuilder withWhoId(Id id) {
			 obj.WhoId = id;
			 return this;
		}

		public TaskBuilder withType(String type) {
			obj.Type = type;
			return this;
		}

		public TaskBuilder withSubject(String subject) {
			obj.Subject = subject;
			return this;
		}

		 public Task build() {
			 return obj;
		}

	}

	public static TaskBuilder aTask() { return new TaskBuilder(); }

	/*------------------------------------------------------------------------
	             TaskBuilderEnd
	------------------------------------------------------------------------*/

	/*------------------------------------------------------------------------
	             ContactBuilderStart
	------------------------------------------------------------------------*/
	public class ContactBuilder {
		private Contact obj = new Contact(LastName = 'STRING');

		public ContactBuilder withEmail(String value) {
			 obj.Email = value;
			 return this;
		}

		 public Contact build() {
			 return obj;
		}

	}

	public static ContactBuilder aContact() { return new ContactBuilder(); }

	/*------------------------------------------------------------------------
	             ContactBuilderEnd
	------------------------------------------------------------------------*/

}